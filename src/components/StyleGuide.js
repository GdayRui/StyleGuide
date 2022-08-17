
import { sampleData } from '../sampleData';
import Tabs from './Tabs';
import Button from './Button';
import CodeSample from './CodeSample';

function StyleGuide() {
	const { tabs, tabsCodeExample } = sampleData;

	return (
		<div className="style-guide">
			{/* left column - disabled */}
			<div className='flex-container'>
				<p className='title'>DISABLED</p>

				{/* button */}
				<div className='flex-item'>
					<Button disabled={true} text="Primary Action" />
				</div>

				{/* textbox */}
				<div className='flex-item'>
					<input type="text" placeholder='textbox' disabled />
				</div>

				{/* radio button */}
				<div className='flex-item'>
					<div className='radio-button disabled'>
						<input type="radio" id="radio1" name="radio-group-1" value="Radio1" disabled />
						<label for="radio1">Radio Button</label>
					</div>
					<div className='radio-button disabled'>
						<input type="radio" id="radio2" name="radio-group-1" value="Radio2" checked="checked" disabled />
						<label for="radio2">Radio Button</label>
					</div>
				</div>

				<div className='flex-item'>
					<Tabs tabs={tabs} />
					<CodeSample codeExampleBody={tabsCodeExample}></CodeSample>
				</div>
			</div>

			{/* right column */}
			<div className='flex-container'>
				<p className='title'>HOVER / ENABLED</p>

				{/* button */}
				<div className='flex-item'>
					<Button disabled={false} text="Primary Action" />
				</div>

				{/* textbox */}
				<div className='flex-item'>
					<input type="text" placeholder='textbox' />
				</div>

				{/* radio button */}
				<div className='flex-item'>
					<div className='radio-button'>
						<input type="radio" id="radio3" name="radio-group-2" value="Radio3" />
						<label for="radio3">Radio Button</label>
					</div>
					<div className='radio-button'>
						<input type="radio" id="radio4" name="radio-group-2" value="Radio4" checked="checked" />
						<label for="radio4">Radio Button</label>
					</div>
				</div>

				{/* card */}
				<div className='flex-item'>
					<div className='card'>
						<h1>Card Heading</h1>
						<p>There is a Tab component that contains a Title and some Content. Each tab can contain different content and the
							user can switch between the content by clicking on the Tab Title. The number of tabs should be dynamic, with a
							maximum of 5 tabs.</p>
						<Button disabled={false} text="Action" />
					</div>
				</div>
			</div>
		</div >
	);
}

export default StyleGuide;
