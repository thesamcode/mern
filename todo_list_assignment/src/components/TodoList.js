
// import React, { useState } from 'react';

// const items = ['misc task'];

// export default function ItemForm() {
//     const [selectedItem, setSelectedItem] = useState(items[0]);
//     const [isComplete, setIsComplete] = useState(false);
 
//     function handleSubmit(event) {
//         event.preventDefault();
//         console.log('The ' + selectedItem + ' is' + (isComplete ? '' : ' not completed') + ' completed');
//     }
 
//     return (
//         <form onSubmit={handleSubmit}>
//             <select value={selectedItem} onChange={e => setSelectedItem(e.target.value)}>
//                 {items.map( (item, idx) => 
//                     <option key={idx} value={item}>{item}</option>
//                 )}
//             </select>
//             <label>
//                 <input type="checkbox" checked={isComplete} onChange={e => setIsComplete(e.target.checked)}/> Is it completed?
//             </label>
//             <button>Complete it!</button>
//         </form>
//     );
// }




// const TodoList = (props) => {
//     const [listitem, setListItem] = useState("");

//     const createListItem = (e) => {
//         e.preventDefault();
//         const newListItem = { listitem };
//         console.log("Saved", newListItem);
//         };

//     return (
//         <form onSubmit={createListItem}>
//             <div>
//                 <label>First Name: </label>
//                 <input type="text" onChange={(e) => setListItem(e.target.value)} value={firstname} />
//             </div>
//             <input type="submit" value="Create ListItem" />
//             <div>
//                 <p>Your Form Data</p>
//                 <p>{listitem}</p>
//                 </div>
//             </form>
//     );
// };