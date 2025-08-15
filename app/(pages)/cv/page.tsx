import Header from "@/app/components/ui/Header"

export default function page() {
    return (
        <div>
            <Header />
            <iframe src="/pdf/cv_amour_dev.pdf" className=" w-full h-screen my-20 bg-black" ></iframe>
        </div>
    )
}
