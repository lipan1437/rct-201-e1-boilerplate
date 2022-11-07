import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
	// TODO
	initValues: number[];
	label: string;
};
const List2 = (props: List2Props) => {
  const { initValues, label }=props
	const [myNum, setMyNum] = useState<number>(0);
	const handleChange = (num: number) => {
		setMyNum(num);
	};
	const { list, appendEnd, popStart, clear, reset }=useNumberList(initValues);
	// console.log(label, list);
	return (
		<div data-testid="list2">
			<h3 data-testid="list2-label">
				{/* Label */} {label}
			</h3>

			<div style={{ display: "flex", gap: "10px" }}>
				{
					list.map((ele, id) => (
						<div key={ele + id} data-testid="list2-element">
							{ele}
						</div>
					))
				}
			</div>

			<input
				data-testid="list2-input"
				value={myNum}
				type="number"
				onChange={(e) => {
					handleChange(+e.currentTarget.value);
				}}
			/>
			<button
				data-testid="list2-btn-append-end"
				onClick={() => {
					appendEnd(myNum);
				}}>
				{/* Button to append new number to the end of the list */}
				Apppend End
			</button>
			<button data-testid="list2-btn-pop-start" onClick={popStart}>
				{/* Button to  pop first element of the list */}Pop Start
			</button>
			<button data-testid="list2-btn-clear" onClick={clear}>
				{/* Button to  clear the list */}Clear
			</button>
			<button data-testid="list2-btn-reset" onClick={reset}>
				{/* Button to  reset the list to initialValue */}Reset
			</button>
		</div>
	);
};

export default List2;