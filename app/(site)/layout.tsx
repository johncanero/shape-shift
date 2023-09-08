import Footer from "@/components/Footer";

const SiteLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}

export default SiteLayout;