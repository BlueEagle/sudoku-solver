import React, { useState } from "react";
import styled from "styled-components";

import BoardSection from "./BoardSection";

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function generateInitialBoardValues() {
  let initialBoardValues = [];
  numbers.forEach((number) => {
    initialBoardValues[number] = [];
    letters.forEach((letter) => {
      initialBoardValues[number][letter] = "";
    });
  });
  return initialBoardValues;
}
console.log(generateInitialBoardValues());

function splitArrayBy(array, numToSplitBy) {
  let count = 0;
  let newArrayOfGroups = [];
  let newArrayOfItems = [];
  array.forEach((item) => {
    count++;
    // console.log(item);
    if (count <= numToSplitBy) {
      newArrayOfItems.push(item);
      //   console.log(`${item} is ${count} of it's group (${newArrayOfItems})`);
      if (item === array[array.length - 1])
        newArrayOfGroups.push(newArrayOfItems);
    } else {
      count = 1;
      newArrayOfGroups.push(newArrayOfItems);
      //   console.log(`Group updated, it now looks like: ${newArrayOfGroups}`);
      //   console.log(newArrayOfGroups);
      newArrayOfItems = [];
      newArrayOfItems.push(item);
      //   console.log(`${item} is ${count} of it's group`);
    }
  });
  return newArrayOfGroups;
  // for(let i=0; i<numToSplitBy; i++) {
  //     array[i]
  // }
}
console.log("split array: " + splitArrayBy(letters, 3));

function generateSectionArray() {
  let sectionArray = [];

  return sectionArray;
}

export default function SudokuBoard() {
  const [boardValues, setBoardValues] = useState(generateInitialBoardValues());

  return (
    <PageContainer>
      <h1>Sudoku Solver</h1>
      <SudokuContainer>
        {/* {letters.} */}
        {/* <BoardSection />
        <BoardSection />
        <BoardSection />
        <BoardSection />
        <BoardSection />
        <BoardSection />
        <BoardSection />
        <BoardSection />
        <BoardSection /> */}
      </SudokuContainer>
    </PageContainer>
  );
}

const SudokuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* background-color: red; */
  width: 600px;
  height: 600px;
`;

const PageContainer = styled.section`
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
