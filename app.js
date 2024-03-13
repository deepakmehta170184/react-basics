const reactH1tag = React.createElement(
	'h1',
	{ id: 'heading', deepak: 'Mehta' },
	'Hello World from React'
);
console.log('reactH1tag--', reactH1tag);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(reactH1tag);
