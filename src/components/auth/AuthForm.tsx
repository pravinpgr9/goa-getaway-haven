import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Button,
  Checkbox
} from "@/components/ui";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  rememberMe: z.boolean().optional(),
  name: z.string().min(2, {
    message: "Name must be at least 2 characters long",
  }).optional(),
  termsAccepted: z.boolean().optional().default(false),
});

type FormValues = z.infer<typeof formSchema>;

const AuthForm = ({ type = "signin" }: { type?: "signin" | "signup" }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const defaultValues: Partial<FormValues> = {
    email: "",
    password: "",
    rememberMe: false,
    ...(type === "signup" ? { 
      name: "",
      termsAccepted: false 
    } : {})
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(
      type === "signup" 
        ? formSchema
        : formSchema.omit({ name: true, termsAccepted: true })
    ),
    defaultValues,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSignIn = async (values: FormValues) => {
    setIsLoading(true);
    
    try {
      console.log("Signin values:", values);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Success!",
        description: "You are now signed in.",
      });
      
      // Redirect to home page 
      window.location.href = "/";
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onSignUp = async (values: FormValues) => {
    setIsLoading(true);
    
    try {
      console.log("Signup values:", values);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Success!",
        description: "Your account has been created. You can now sign in.",
      });
      
      // Redirect to sign in page
      window.location.href = "/signin";
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold">{type === "signup" ? "Create an account" : "Sign In"}</h2>
        <p className="text-muted-foreground text-sm">
          {type === "signup" ? "Enter your details below to register." : "Enter your email and password to sign in."}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={type === "signup" ? form.handleSubmit(onSignUp) : form.handleSubmit(onSignIn)} className="space-y-4">
          {type === "signup" && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      <span className="sr-only">Toggle password visibility</span>
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {type === "signin" ? (
            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">Remember me</FormLabel>
                  </FormItem>
                )}
              />
              <Link to="/forgot-password" className="text-sm text-goa-blue hover:underline">Forgot password?</Link>
            </div>
          ) : (
            <FormField
              control={form.control}
              name="termsAccepted"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Accept terms and conditions
                    </FormLabel>
                    <FormDescription>
                      You agree to our Terms of Service and Privacy Policy.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Loading..." : type === "signup" ? "Create Account" : "Sign In"}
          </Button>
        </form>
      </Form>

      <div className="mt-6 text-center">
        {type === "signup" ? (
          <>
            Already have an account? <Link to="/signin" className="text-goa-blue hover:underline">Sign In</Link>
          </>
        ) : (
          <>
            Don't have an account? <Link to="/signup" className="text-goa-blue hover:underline">Create Account</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
