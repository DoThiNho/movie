import Header from "@/shared/components/Header";
import { ReactWithChild } from "@/shared/types/app";
import { Layout } from "antd";

export default function MainLayout({ children }: ReactWithChild) {
  return (
    <Layout className="h-full">
      <Header />
      {children}
    </Layout>
  );
}
