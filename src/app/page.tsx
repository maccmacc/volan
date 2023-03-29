import Header from "@/components/header";

// const f = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({});
//         }, 10000);
//     });
// };
export default async function Page() {
    // await f();
    console.log(123);
    return (
        <>
            <Header />
        </>
    );
}
