import React, { useState } from "react";

const Tabs = (props) => {

	const [currentIndex, setCurrentIndex] = useState(0);

	const { tabs } = props

	// Only render frist 5 elements of Tabs
	const MAXIMUM_TABS_NUMBER = 5;
	const first5Tabs = tabs.filter((tab, index) => index < MAXIMUM_TABS_NUMBER);

	return (
		<div className="tab">
			{/* title */}
			<div className="tab-title">
				{
					first5Tabs.length > 0 && (
						first5Tabs.map((tab, idx) => <button key={idx}
							className={currentIndex === idx ? "tab-active" : ""}
							onClick={() => { setCurrentIndex(idx) }}>{tab.title}</button>)
					)
				}
			</div>

			{/* content */}
			{
				first5Tabs.length > 0 && (
					first5Tabs.map((tab, idx) => (
						<div key={idx} className={currentIndex === idx ? "tab-content-active" : "tab-content"}>
							<p>{tab.content}</p>
						</div>
					))
				)
			}
		</div>)
}

export default Tabs;