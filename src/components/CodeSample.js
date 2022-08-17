import React, { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const CodeSample = (props) => {
	const [showCode, setShowCode] = useState(false);

	const language = 'jsx';
	const showLineNumbers = 'true';
	const startingLineNumber = 1;

	return (
		<div className="code-example">
			<div>
				<button onClick={() => {
					setShowCode(!showCode)
				}}>Code</button>
			</div>

			{showCode && (
				<CopyBlock
					text={props.codeExampleBody}
					language={language}
					showLineNumbers={showLineNumbers}
					startingLineNumber={startingLineNumber}
					theme={dracula}
				/>
			)}
		</div>
	)
}

export default CodeSample;