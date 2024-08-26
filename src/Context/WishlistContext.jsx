import axios from 'axios';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const headers = useMemo(() => {
    return {
      token: localStorage.getItem('userToken'),
    };
  }, []);

  async function addProductToWishlist(productId) {
    try {
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        { productId },
        {
          headers,
        }
      );
      console.log(data);
      setWishlist(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProductFromWishlist(productId) {
    try {
      const { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,

        {
          headers,
        }
      );
      console.log(data);
      setWishlist(data);
    } catch (error) {
      console.log(error);
    }
  }

  const getWishlist = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        {
          headers,
        }
      );

      //   console.log(data.data);
      setWishlist(data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }, [headers]);

  useEffect(() => {
    getWishlist();
  }, [getWishlist]);
  // async function getWishlist() {
  //   try {
  //     const { data } = await axios.get(
  //       `https://ecommerce.routemisr.com/api/v1/wishlist`,
  //       {
  //         headers,
  //       }
  //     );

  //     //   console.log(data.data);
  //     setWishlist(data);
  //     return data.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(function () {
  //   getWishlist();
  // }, []);

  return (
    <WishlistContext.Provider
      value={{
        addProductToWishlist,
        deleteProductFromWishlist,
        wishlist,
        getWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;
