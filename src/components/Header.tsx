import jobData from "../../data/data.json";
import ManageImage from "../images/manage.svg?react";
import { useState } from "react";

export default function Header() {
   const [filters, setFilters] = useState([]);
   function handleKeywordClick(keyword: string) {
      let newArr: string[];
      if (filters.includes(keyword)) {
         newArr = filters.filter((element) => {
            return element != keyword;
         });
      } else {
         newArr = [...filters, keyword];
      }
      setFilters(newArr);
   }
   let mappedCards = jobData.map((job) => {
      return (
         <>
            <div className="flex items-center justify-between w-full bg-white p-8 shadow-card rounded-lg">
               <div>
                  <ManageImage />
               </div>
               <div className="mr-auto flex flex-col px-4">
                  <div className="flex gap-3">
                     <h3 className="text-[1.125rem] text-secondary font-bold">
                        {`${job.company}`}
                     </h3>
                     {job.new && (
                        <span className="bg-secondary px-2 py-1 rounded-xl text-[0.875rem] text-white font-bold">
                           New!
                        </span>
                     )}
                     {job.featured && (
                        <span className="bg-primary text-white px-2 py-1 rounded-xl font-bold text-[0.875rem]">
                           Featured
                        </span>
                     )}
                  </div>
                  <h2 className="cursor-pointer text-[1.375rem] font-bold text-primary hover:text-secondary">
                     {job.position}
                  </h2>
                  <div className="flex items-center justify-between text-tertiary gap-4">
                     <span>{job.postedAt}</span>
                     <span>•</span>
                     <span>{job.contract}</span>
                     <span>•</span>
                     <span>{job.location}</span>
                  </div>
               </div>
               <div className="flex gap-4 flex-wrap">
                  {/* Keywords */}

                  <span
                     onClick={() => handleKeywordClick(job.role)}
                     className={`text-secondary bg-secondaryOpacity font-bold rounded-md p-2 cursor-pointer ${
                        filters.includes(job.role) ? "" : ""
                     }`}
                  >
                     {job.role}
                  </span>
                  <span
                     onClick={() => handleKeywordClick(job.level)}
                     className={`text-secondary bg-secondaryOpacity font-bold rounded-md p-2 cursor-pointer ${
                        filters.includes(job.level) ? "" : ""
                     }`}
                  >
                     {job.level}
                  </span>
                  {job.tools &&
                     job.tools.map((tool) => {
                        return (
                           <span
                              onClick={() => handleKeywordClick(tool)}
                              className={`text-secondary bg-secondaryOpacity font-bold rounded-md p-2 cursor-pointer ${
                                 filters.includes(tool) ? "" : ""
                              }`}
                           >
                              {tool}
                           </span>
                        );
                     })}
                  {job.languages.map((language) => {
                     return (
                        <span
                           onClick={() =>
                              handleKeywordClick(language)
                           }
                           className={`text-secondary bg-secondaryOpacity font-bold rounded-md p-2 cursor-pointer ${
                              filters.includes(language) ? "" : ""
                           }`}
                        >
                           {language}
                        </span>
                     );
                  })}
               </div>
            </div>
         </>
      );
   });
   return (
      <main className="bg-mainBg">
         <div className="container mx-auto bg-custom-image h-min-screen">
            <div
               className="w-full h-24 absolute top-0 left-0"
               style={{
                  backgroundImage:
                     "url('/src/images/shape-desktop.png')",
               }}
            ></div>
            <div className="card-wrapper mt-24 w-full flex flex-col gap-6 pt-16">
               {mappedCards}
            </div>
         </div>
      </main>
   );
}
