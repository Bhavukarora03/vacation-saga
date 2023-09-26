import CardAuthorBox from "components/CardAuthorBox/CardAuthorBox";
import CardAuthorBox2 from "components/CardAuthorBox2/CardAuthorBox2";
import Heading from "components/Heading/Heading";
import { DEMO_AUTHORS } from "data/authors";
import { AuthorType } from "data/types";
import React, { FC,useEffect,useState } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";

export interface SectionGridAuthorBoxProps {
  className?: string;
  authors?: AuthorType[];
  boxCard?: "box1" | "box2";
}

const DEMO_DATA = DEMO_AUTHORS.filter((_, i) => i < 10);

const SectionGridAuthorBox: FC<SectionGridAuthorBoxProps> = ({
  className = "",
  authors = DEMO_DATA,
  boxCard = "box1",
}) => {
  const [dummyData, setDummyData] = useState([0])
  useEffect(() => {
    getData()
  }, [])
  const getData = () => {
    let url = 'https://admin.vacationsaga.com/api/top_ten_authors';
    let res = fetch(url).then(data => data.json()).then(data => {
      setDummyData(data)
    }).catch(e => { console.log(e) })
  }
  return (
    <div
      className={`nc-SectionGridAuthorBox relative ${className}`}
      data-nc-id="SectionGridAuthorBox"
    >
      <Heading desc="Rating based on their stay experiences" isCenter>
        Top 10 VS Clients of the month
      </Heading>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 ">
        {dummyData.map((author, index) =>
          boxCard === "box2" ? (
            <CardAuthorBox2 key={author.id} author={author} />
          ) : (
            <CardAuthorBox
              index={index < 10 ? index + 1 : undefined}
              key={author.id}
              author={author}
            />
          )
        )}
      </div>
     
    </div>
  );
};

export default SectionGridAuthorBox;
