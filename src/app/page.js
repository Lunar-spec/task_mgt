import DoneListSection from "./components/DoneListSection";
import InProgressListSection from "./components/InProgressListSection";
import Navbar from "./components/Navbar";
import RevisedListSection from "./components/RevisedListSection";
import TitleSection from "./components/TitleSection";
import ToDoListSection from "./components/ToDoListSection";
import ContactListSection from "./components/ContactListSection"

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="p-3">
          <TitleSection />
          {/* <div className="container flex justify-center gap-5 select-none"> */}
            <div className="container grid gap-48 mx-10 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 select-none">
            <ToDoListSection />
            <InProgressListSection />
            <DoneListSection />
            <RevisedListSection />
            <ContactListSection />
          </div>
        </div>
      </div>
    </>
  )
}
