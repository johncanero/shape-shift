import Link from "next/link";

const Footer = () => {
    return (
        <div>
            <footer className="text-sm text-center text-gray-500 md:block mt-12">
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/johncanero/"
                >

                    <span className="mr-2 font-bold text-gray-900 dark:text-gray-100">
                        John Cañero
                    </span>
                </Link>
                &copy; {new Date().getFullYear()} All Rights Reserved
            </footer>
        </div>
    );
}

export default Footer;