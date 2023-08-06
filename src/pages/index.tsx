import React, { useState } from "react";
import PersonForm from "@/components/AddPersonForm";
import PersonTable from "@/components/PersonTable";
import { getJalaliDate } from "@/utils/galali";
import { ErrToast, SuccessToast } from "@/components/Toast";
import Fetch from "@/config/AxiosConfig";
import { PersonType } from "@/types/person";

interface PropType {
  persons: Array<PersonType>;
}

const Home: React.FC<PropType> = (props: PropType) => {
  getJalaliDate();
  const [persons, setPersons] = useState<
    Array<{ name: string; birthDate: string; gender: string }> | any
  >(props.persons);

  return (
    <div dir="rtl">
      <PersonForm
        onConfirm={async () => {
          try {
            const data = await Fetch.get("/api/get-persons");
            setPersons(data);
            SuccessToast("افزودن شخص با موفقیت انجام شد.");
          } catch (error) {
            ErrToast("بارگذاری با خطا مواجه شد");
          }
        }}
      />

      <PersonTable data={persons} />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const persons = await Fetch.get("/api/get-persons"); // Assuming you have an API route to get persons from the file
    return { props: { persons } };
  } catch (error) {
    console.error("Error getting persons:", error);
    return { props: { persons: [] } };
  }
}

export default Home;
