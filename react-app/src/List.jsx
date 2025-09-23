

function List({ items }) {
    const fruits = [
            { name: 'Apple', calories: 95 }, 
            { name: 'Banana', calories: 105 }, 
            { name: 'Cherry', calories: 50 }, 
            { name: 'Date', calories: 20 }, 
            { name: 'Elderberry', calories: 60 }, 
            { name: 'Fig', calories: 37 }, 
            { name: 'Grape', calories: 62 }];
    const listItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name} -<b>{fruit.calories} </b>calories</li>);
    
  return (
   <ol>{listItems}</ol>
  );
}
export default List;