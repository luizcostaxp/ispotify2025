import './Input.css'

function Input({ tipo, imgSrc, type = "text", value, onChange }) {
	return (
		<>
			<div className='inputDiv'>
				<input
					placeholder={tipo}
					type={type}
					className='input'
					value={value}
					onChange={onChange}
				/>
				<img src={imgSrc} alt={tipo} />
			</div>
		</>
	);
}

export default Input;
