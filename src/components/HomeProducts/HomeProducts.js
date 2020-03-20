import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import homeProductsStyles from './homeProducts.module.css'
import ScrollAnimation from 'react-animate-on-scroll';

const indexCounter = (array) => {
  let index;
  
  for (index=0; index < array.length; index++) {
    console.log(index);
    console.log(array[index])
  }

  return index.toString()
}

const HomeProducts =() => (
  <StaticQuery
    query={graphql`
    query CatalogueQuery {
      products: allDatoCmsProduct {
        edges {
          node {
            id
            price
            productName
            productPhoto {
              url
            }
          }
        }
      }
    }
    `}
render={data => (

    <div id="merchandise" className={homeProductsStyles.homeProducts}>
      {
        data.products.edges.map(({ node: product, index }) => (
          
          <ScrollAnimation key={product.id} animateIn="fadeIn" delay={1}>
          
          {console.log('auuu', data.products.edges)}
          <div className={homeProductsStyles.homeProduct} key={product.id}>
            <div
              className="Product snipcart-add-item"
              data-item-id={product.id}
              data-item-price={product.price}
              data-item-image={product.productPhoto.url}
              data-item-name={product.productName}
              data-item-url={`/`}
            >
            <img src={product.productPhoto.url} />
              <div className="Product__image">
                {/* <Img sizes={product.image.sizes} /> */}
              </div> <div className="Product__details">
                <div className={homeProductsStyles.productName}>
                  <span>{product.productName}</span>
                  <div className="Product__price">
                    {product.price}zł
                  </div>
                </div>
                <span className="Product__buy">Buy now</span>
              </div>
            </div>
          </div>
          </ScrollAnimation>
        ))
      }
    </div>

     )}
   />
)

export default HomeProducts;


// import React from 'react';
// import { Link, graphql } from "gatsby"

// const HomeProducts = ({ data }) => {
//     console.log(data.allDatoCmsProduct.edges);
//     return (
//     //     <div className="Catalogue">
        
//     //     {
//     //       data.products.edges.map(({ node: product }) => (
//     //         <div className="Catalogue__item" key={product.id}>
//     //           <a href="#" className="Product">
//     //             <div className="Product__image">
//     //               <img src={product.image.url} />
//     //             </div>
//     //             <div className="Product__details">
//     //               <div className="Product__name">
//     //                 {product.name}
//     //                 <div className="Product__price">
//     //                   {product.price}€
//     //                 </div>
//     //               </div>
//     //               <span className="Product__buy">Buy now</span>
//     //             </div>
//     //           </a>
//     //         </div>
//     //       ))
//     //     }
//     //   </div>
//     );
// };

// export default HomeProducts;

// export const query = graphql`
// query CatalogueQuery {
//   products: allDatoCmsProduct {
//     edges {
//       node {
//         id
//         price
//         productName
//         productPhoto {
//           url
//         }
//       }
//     }
//   }
// }
// `