import ClientLayout from "./clientLayout";

export const metadata = {
    title: "Admin Dashboard",
    description: "Generated by create next app",
};

export default function DashboardLayout({ children }) {
    return (
        <ClientLayout>
            {children}
        </ClientLayout>
    );
}
