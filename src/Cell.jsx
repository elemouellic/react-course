import './Cell.css';

// eslint-disable-next-line react/prop-types
function Cell({value, onClick, className}) {
    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
}

export default Cell;