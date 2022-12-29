import { useEffect, useState } from "react";

// const dataList = [
//   { year: 1868, jpYear: "明治1年", jpYearEng: "Meiji 1" },
//   { year: 1912, jpYear: "大正1年", jpYearEng: "Taisho 1" },
//   { year: 1926, jpYear: "昭和1年", jpYearEng: "Showa 1" },
//   { year: 1989, jpYear: "平成1年", jpYearEng: "Heisei 1" },
//   { year: 2019, jpYear: "令和1年", jpYearEng: "Reiwa 1" },
// ];

function App() {
  const [year, setYear] = useState<string>();
  const [jpYear, setJpYear] = useState<string>();
  const [jpYearEng, setJpYearEng] = useState<string>();

  useEffect(() => {
    // console.log(year);
    const yearList = year?.split("\n");

    // console.log("year list", "=>", yearList);
    const jpYearList = yearList?.map((year) => {
      const yearInt = parseInt(year);
      if (yearInt >= 2019) {
        return `令和${yearInt - 2018}年`;
      }
      if (yearInt >= 1989) {
        return `平成${yearInt - 1988}年`;
      }
      if (yearInt >= 1926) {
        return `昭和${yearInt - 1925}年`;
      }
      if (yearInt >= 1912) {
        return `大正${yearInt - 1911}年`;
      }
      if (yearInt >= 1868) {
        return `明治${yearInt - 1867}年`;
      }
      return "";
    });

    const jpYearEngList = yearList?.map((year) => {
      const yearInt = parseInt(year);
      if (yearInt >= 2019) {
        return `Reiwa ${yearInt - 2018}`;
      }
      if (yearInt >= 1989) {
        return `Heisei ${yearInt - 1988}`;
      }
      if (yearInt >= 1926) {
        return `Showa ${yearInt - 1925}`;
      }
      if (yearInt >= 1912) {
        return `Taisho ${yearInt - 1911}`;
      }
      if (yearInt >= 1868) {
        return `Meiji ${yearInt - 1867}`;
      }
      return "";
    })

    // make the list into string that is splitted by \n
    if (jpYearList) setJpYear(jpYearList.join("\n"));
    if (jpYearEngList) setJpYearEng(jpYearEngList.join("\n"));

    // console.log("jp year list", "=>", jpYearList);
    // console.log("jp year eng list", "=>", jpYearEngList);
  }, [year])

  return (
    <div className="App">
      {/* <button onClick={handleTest}>test123</buton> */}
      <h1>Japan Year Converter</h1>
      <h3>split the year by new line</h3>
      <h3>Not yet from japan to western year, contact me if you want the feature: github @PPKan</h3>
      
      
      <textarea
        style={{ width: "300px", height: "300px" }}
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="western year"
      />
      <textarea style={{ width: "300px", height: "300px" }} contentEditable={false} value={jpYear} placeholder="Japan year"/>
      <textarea style={{ width: "300px", height: "300px" }} contentEditable={false} value={jpYearEng} placeholder="Japan year in English"/>
    </div>
  );
}

export default App;
