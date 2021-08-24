import { useParams } from "react-router-dom";

function Category( props )
{
    const { categoryId } = useParams();
    console.log( "categoryId", categoryId); 
    console.log( "props", props); 
    return (
        <>
            <h2>category {categoryId}</h2>
            <p>otr</p>
        </>
    )
}

export default Category;