import { useEffect, useState } from "react";


// Component 
import { Test } from "../../components";
import reactLogo from "../../../assets/react.svg";
import viteLogo from "/vite.svg";

interface DefaultProps {
  children?: JSX.Element;
}

interface Count {
  countTotal: number;
}

interface userData {
  name: string;
  age: number;
}

const initialCount: Count = {
  countTotal: 0,
};

const initialUserData: userData = {
  name: "",
  age: 0,
};

const palindromCheck = (word: string) => {
  // const length = String(word).split('').reverse().join('')
  const temp = word;
  const length = word.length;
  for (let index = 0; index < length; index++) {
    const normalChar = temp.charAt(index);
    const reverseChar = temp.charAt(length - (index + 1));

    if (normalChar === reverseChar) {
      console.log("@@@ PALINDROM");
    } else {
      console.log("@@@ NOT PALINDROM");
    }
  }
};

const Home = ({ children }: DefaultProps) => {
  const [count, setCount] = useState(initialCount);
  const [userData, setUserData] = useState([initialUserData]);

  palindromCheck("1katak1");

  const testingFunction = () => {
    const tempData = [
      {
        name: "Lebron",
        age: 23,
      },
      {
        name: "Jordan",
        age: 45,
      },
      {
        name: "Ja Morant",
        age: 12,
      },
    ];


    // Find Spefici id Object
    // const search = tempData.find(value => value.name.toLowerCase().includes('leb'))
    // console.log('@@@ search: ', search);


    // Delete Spefici id Object
    // const DeleteArray = tempData.findIndex((value) => value.age === 45);
    // tempData.splice(DeleteArray, 1);
    
    const DeleteArray = tempData.filter((value) => value.age !== 45);


    const newData = {
      name: "J Tatum",
      age: 0,
    }

    DeleteArray.push(newData)


    // Update spesific ID
    const updateArray = DeleteArray.find(value => value.name.toLowerCase().includes('tatum'))

    if (updateArray !== undefined){
      updateArray.name = "Wemby" 
      updateArray.age = 1
    }

    setUserData(DeleteArray);
  };

  const fibonanciFunction = (total: number) => {
    let count1 = 0;
    let count2 = 1;
    let nextCount = 0;

    for (let i = 0; i < total; i++) {
      console.log("@@@ fibonanci: ", count1);
      nextCount = count1 + count2;
      count1 = count2;
      count2 = nextCount;
    }
  };

  useEffect(() => {
    testingFunction();
    fibonanciFunction(9);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {userData.map((value, index) => {
        return (
          <div key={index}>
            <p>{value.name}</p>
            <p>{value.age}</p>
          </div>
        );
      })}
      <div className="card">
        <button
          onClick={() =>
            setCount({
              countTotal: count.countTotal + 1,
            })
          }
        >
          count is {count.countTotal}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div><Test/></div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default Home;
