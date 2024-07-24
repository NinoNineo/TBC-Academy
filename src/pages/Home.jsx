import backgroundImage from "../assets/images/first-image.webp"
import TeamSelect from "../components/home/team/teamSelect"
import { NavLink } from "react-router-dom"
import image1 from "../assets/images/image-5.png"
import image2 from "../assets/images/image-6.jpg"
import image3 from "../assets/images/image-7.png"
import comp1 from "../assets/images/image-15.jpg"
import comp2 from "../assets/images/image-13.png"
import appstore from "../assets/images/app.svg"
import googleplay from "../assets/images/google.svg"
import digital from "../assets/images/image-8.png"

import product1 from "../assets/images/image-2.png"
import product2 from "../assets/images/image-4.png"
import product3 from "../assets/images/image-3.png"

import backgroundImage2 from "../assets/images/image-9.png"

import award1 from "../assets/images/image-10.png"
import award2 from "../assets/images/image-11.png"
import award3 from "../assets/images/image-12.png"
const Home = () => {
    const items =
        [
            {
                image: image1,
                company: comp1,
                title: "ინვესტიციები",
                name: "MP დეველოპმენტი - აშშ და ევროს ობლიგაციები"
            },
            {
                image: image2,
                company: comp1,
                title: "ჯაზ ფესტივალის შეთავაზებები",
                name: "IVERIA BEACH - დაიბრუნეთ 30%"
            },
            {
                image: image3,
                company: comp2,
                title: "ავტო თეგეტა მოტორსი",
                name: "თეგეტა მოტორსი - 50% ფასდაკლება"
            }
        ];
    const products =
        [
            {
                image: product1,
                title: "ციფრული",
                name: "თიბისი კონცეპტის ციფრული ნაკრები განკუთვნილია მათთვის, ვისთვისაც საბანკო მომსახურებით სარგებლობა ყოველდღიურობის ნაწილია, ვინც..."
            },
            {
                image: product2,
                title: "პრემიუმი",
                name: "თიბისი კონცეპტის მომხმარებლებთან ურთიერთობის ერთ-ერთი ფორმატი - პრემიუმ ნაკრები. სხვა საბანკო და არასაბანკო უპირატესობებთან ერთად"
            },
            {
                image: product3,
                title: "360",
                name: "თიბისი კკონცეპტის 360 ნაკრები განკუთვნილია მათთვის, ვისაც სხვა საბანკო და არასაბანკო უპირატესობებთან ერთად, კიდევ უფრო მეტი ფინანსური ინსტრუმენტი..."
            }
        ];
    const awards =
        [
            {
                image: award1,
                title: "საუკეთესო პერსონალური საბანკო მომსახურება საქართველოში 2024",
                name: "The Global Finance"
            },
            {
                image: award2,
                title: "საუკეთესო პერსონალური საბანკო მომსახურება საქართველოში 2023",
                name: "Euromoney"
            },
            {
                image: award3,
                title: "საუკეთესო პერსონალური საბანკო მომსახურება საქართველოში 2022",
                name: "The Global Finance"
            }
        ];
    return (<>
        <main className="w-full m-auto">
            <h6 className="text-xs mt-28 mb-14 w-9/12 m-auto text-gray-500">მთავარი</h6>
            <div className="2xl:w-9/12 m-auto lg:h-96 overflow-hidden rounded-lg lg:p-24 sm:pt-56 sm:px-12 mb-16 md:w-11/12 sm:w-full sm:h-[450px] max-[640px]:w-full max-[640px]:h-56 max-[640px]:p-8" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backdropFilter: 'brightness(50%)'
            }}>
                <div className="flex flex-col gap-6 sm:py-9 px-0 lg:p-0">
                    <h1 className="text-2xl font-bold text-white">თიბისი კონცეპტი</h1>
                    <p className="text-base text-white lg:w-1/2 sm:w-full">პერსონალური საბანკო მომსახურება, მორგებული თქვენს საჭიროებებსა და ინტერესებზე</p>
                    <button className="flex items-center gap-2 bg-gradient-to-r font-bold from-blue-800 to-blue-700 text-white text-xs lg:w-36 h-12 justify-center rounded-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 sm:w-full"><svg data-v-67f54ace="" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path data-v-67f54ace="" d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path></svg>გამოიწერეთ</button>
                </div>
            </div>
            <h1 className="text-4xl font-medium mb-32 2xl:w-9/12 m-auto md:w-11/12 sm:w-10/12 max-[640px]:w-10/12">გამოიწერეთ თიბისი კონცეპტის ნაკრები და ისარგებლეთ როგორც საბანკო, ისე არასაბანკო უპირატესობებით.</h1>
            <TeamSelect />
            <div className="sm:w-full lg:w-9/12 m-auto gap-8 mb-28 max-[640px]:flex-col flex sm:flex sm:gap-9">
                <div className="flex flex-col gap-5 bg-white px-12 py-10 w-[30%] rounded-lg max-[1024px]:w-full">
                    <h1 className="text-5xl font-bold">94 750</h1>
                    <p className="text-base font-medium text-gray-600">მომხმარებელი</p>
                </div>
                <div className="flex flex-col gap-5 bg-white px-12 py-10 w-[30%] rounded-lg max-[1024px]:w-full">
                    <h1 className="text-5xl font-bold">150+</h1>
                    <p className="text-base font-medium text-gray-600">ღონისძიება</p>
                </div>
                <div className="flex flex-col gap-5 bg-white px-12 py-10 w-[30%] rounded-lg max-[1024px]:w-full">
                    <h1 className="text-5xl font-bold">130+</h1>
                    <p className="text-base font-medium text-gray-600">შეთავაზება</p>
                </div>
            </div>
            <div className="w-9/12 m-auto mb-28">
                <div className="flex items-center justify-between mb-9">
                    <h2 className="text-2xl text-gray-950 font-bold">შეთავაზებები</h2>
                    <span className="text-blue-900 font-bold"><NavLink to="/" className="flex justify-center items-center gap-2 hover:opacity-70">
                        <svg data-v-562b0aec="" width="16" height="16" viewBox="0 0 16 16" fill="blue" xmlns="http://www.w3.org/2000/svg"><path data-v-562b0aec="" d="M9.7987 2.86675L14.4654 7.53341C14.732 7.80008 14.732 8.20008 14.4654 8.46675L9.7987 13.1334C9.53203 13.4001 9.13203 13.4001 8.86537 13.1334C8.5987 12.8667 8.5987 12.4667 8.86537 12.2001L12.3987 8.66675H1.9987C1.5987 8.66675 1.33203 8.40008 1.33203 8.00008C1.33203 7.60008 1.5987 7.33341 1.9987 7.33341H12.3987L8.86537 3.80008C8.73203 3.66675 8.66536 3.53341 8.66536 3.33341C8.66536 3.13341 8.73203 3.00008 8.86537 2.86675C9.13203 2.60008 9.53203 2.60008 9.7987 2.86675Z"></path></svg>
                        ყველა შეთავაზება
                    </NavLink>
                    </span>
                </div>
                <div className="w-full">
                    <div className="h-full m-auto flex justify-betweenw-full">
                        {
                            items.map((item, index) => {
                                return (
                                    <div className="p-3 w-[500px]" key={index}>
                                        <div className="w-full bg-white relative h-[400px] rounded-lg overflow-hidden border-solid border-gray-300 border-[0.5px] hover:shadow-md max-[640px]:h-full">
                                            <div className="absolute w-20 h-14 bg-white rounded-l-lg flex justify-center items-center z-3 top-0 right-0 overflow-hidden">
                                                <img src={item.company} alt="company" className="w-full" />
                                            </div>
                                            <div className="w-full">
                                                <img src={item.image} className="object-contain w-full" />
                                            </div>
                                            <div className="p-7">
                                                <p className="text-gray-400 text-xs max-[640px]:text-xs">{item.title}</p>
                                                <h3 className="font-bold text-lg max-[640px]:text-xs">{item.name}</h3>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="w-full bg-white pt-10 mb-28">
                <div className="w-9/12 m-auto flex items-center justify-between max-[640px]:flex-col">
                    <div>
                        <h2 className="text-2xl font-bold mb-5">ციფრული ბანკი</h2>
                        <p className="mb-3 text-gray-500">შეასრულეთ საბანკო ოპერაციები დისტანციურად, ციფრული ბანკის დახმარებით</p>
                        <div className="flex justify-between items-center w-fit gap-2">
                            <div className="py-4 px-8 border-solid border-gray-200 border">
                                <img src={googleplay} alt="" />
                            </div>
                            <div className="py-4 px-8 border-solid border-gray-200 border">
                                <img src={appstore} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-72">
                        <img src={digital} alt="" className="w-full" />
                    </div>
                </div>
            </div>
            <div className="w-9/12 m-auto mb-28 max-[640px]:w-full max-[640px]:h-[350px]">
                <h2 className="text-2xl text-gray-950 font-bold mb-9">პროდუქტები</h2>
                <div className="w-full">
                    <div className="h-full m-auto flex justify-betweenw-full">
                        {
                            products.map((product, index) => {
                                return (
                                    <div className="p-3" key={index}>
                                        <div className="w-full bg-white relative h-[400px] rounded-lg overflow-hidden border-solid border-gray-300 border-[0.5px] hover:shadow-md" >
                                            <div className="w-full">
                                                <img src={product.image} className="h-[200px] w-full" />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="font-bold text-lg mb-3">{product.title}</h3>
                                                <p className="text-gray-600 text-sm">{product.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="2xl:w-9/12 m-auto lg:h-96 overflow-hidden rounded-lg lg:p-24 sm:pt-56 sm:px-12 mb-16 md:w-11/12 sm:w-full sm:h-[450px] max-[640px]:w-full max-[640px]:h-56 max-[640px]:p-8" style={{
                backgroundImage: `url(${backgroundImage2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backdropFilter: 'brightness(50%)'
            }}>
                <div className="flex flex-col gap-6">
                    <h1 className="text-2xl font-bold text-white">პირადი ბანკირი</h1>
                    <p className="text-base text-white w-full">თქვენი სანდო პარტნიორი ფინანსურ რჩევებსა და ოპერაციებში</p>
                    <button className="flex items-center gap-2 bg-gradient-to-r font-bold from-blue-800 to-blue-500 text-white text-xs w-36 h-12 justify-center rounded-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400">გაიგეთ მეტი</button>
                </div>
            </div>
            <div className="w-9/12 m-auto mb-28 max-[640px]:w-full max-[640px]:h-[350px]">
                <div className="flex items-center justify-between mb-9">
                    <h2 className="text-2xl text-gray-950 font-bold">ჯილდოები</h2>
                </div>
                <div className="w-full">
                    <div className="h-full m-auto flex justify-betweenw-full">
                        {
                            awards.map((award, index) => {
                                return (
                                    <div className="p-3" key={index}>
                                        <div className="w-full bg-white relative h-[240px] rounded-lg overflow-hidden border-solid border-gray-300 border-[0.5px] hover:shadow-md max-[640px]:h-full">
                                            <div className="w-full m-auto mt-6 h-10">
                                                <img src={award.image} className="object-contain w-full h-full" />
                                            </div>
                                            <div className="p-7 overflow-hidden">
                                                <h3 className="font-bold text-lg mb-5 max-[640px]:text-xs">{award.title}</h3>
                                                <p className="text-gray-400 text-xs max-[640px]:text-xs">{award.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    </>)
}
export default Home