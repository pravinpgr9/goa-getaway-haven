
import Layout from "@/components/layout/Layout";
import AuthForm from "@/components/auth/AuthForm";

const SignUpPage = () => {
  return (
    <Layout>
      <div className="py-12 min-h-[calc(100vh-150px)] flex items-center justify-center bg-goa-sand/30">
        <AuthForm type="signup" />
      </div>
    </Layout>
  );
};

export default SignUpPage;
