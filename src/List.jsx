
import PropTypes from 'prop-types'
function List({item=[],category="Category"}){
    



    const Fruits=[{id:1,name:"apple",calories:95},
                  {id:2,name:"orange",calories:105},
                  {id:3,name:"banana",calories:139},
                  {id:4,name:"coconut",calories:109},
                  {id:5,name:"pineapple",calories:100}];
   


    
    //fruits.sort((a,b)=>a.name.localeCompare((b.name)));
    //fruits.sort((a,b)=>(a.calories-b.calories))
    //const lowcalFruits=listFruits.filter(fruit=>fruit.calories>100);
     
    
    const listItems=item.map(fruit=><li key={fruit.id}>
    
                                               {fruit.name}:&nbsp;
                                              <b> {fruit.calories}</b></li>)
    return(<>
        <b><h2 className="list-category">{category}</h2></b>
        <ol className="list-items">{listItems}</ol>
        </>);
    
}

List.propTypes={
    category:PropTypes.string,
    item:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                            name:PropTypes.string,
                                            calories:PropTypes.number,
            
    }))
}
List.defaultProps={
    category:"Category",
    items:[],

}
export default List