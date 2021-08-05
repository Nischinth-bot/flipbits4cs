import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyBfuKmus2JJ1Jo3w74-pIsrn3Y_xKGkTI0',
  authDomain: 'cshelpers-3fe19.firebaseapp.com',
  databaseURL: 'https://cshelpers-3fe19-default-rtdb.firebaseio.com',
  projectId: 'cshelpers-3fe19',
  storageBucket: 'cshelpers-3fe19.appspot.com',
  messagingSenderId: '317638674201',
  appId: '1:317638674201:web:c8403bc17a6ada9f3de788',
  measurementId: 'G-VXH62KZCW7'
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
var db = firebaseApp.database();
// console.log(db);

/** Should return a JSON representation of the current inventory */
export const getInventory = async () => {
  try {
    const inventory = (await db.ref('inventory').get()).toJSON();
    return inventory;
  } catch (error) {
    console.log('Error @ firebase/getInventory()', error);
  }
};

/**
 * Helper method to add item to Firebase inventory.
 * Takes a JSON shop_item as argument.
 */
export const addItemToInventory = async shop_item => {
  try {
    console.log(shop_item);
    await db.ref('inventory/' + shop_item.key).set(shop_item);
  } catch (error) {
    console.log('Error @ firebase/addItemToInventory()', error);
  }
};

/**
 * Helper method to remove an item from the inventory.
 * @param {*} item_key : The unique inventory key of the item you want to remove from the Firebase inventory.
 */
export const removeItemFromInventory = async item_key => {
  try {
    await db.ref('inventory/' + item_key).remove();
  } catch (error) {
    console.log('Error @firebase/removeItemFromInventory()', error);
  }
};
/**
 * Userbase is keyed on email.
 * @param {*} user_obj : Javascript object with fields: key, firstname, lastname, addressl1, addressl2, phone, orders
 */
export const addUserToUserbase = async user_obj => {
  try {
    console.log(user_obj);
    await db.ref('users/' + user_obj.key).set(JSON.stringify(user_obj));
  } catch (error) {
    console.log('Error from @/firebase/addUserToUserBase()', error);
  }
};
/**
 * Return true if user exists. False if not.
 * @param {*} user_email : Check if user with this email exists in Userbase.
 */
export const checkIfUserExists = async email => {
  try {
    const userBase = await db.ref('users/').get();
    for (const user in userBase) {
      if (user.email == email) return true;
    }
    return false;
  } catch (error) {
    console.log('Error from @/firebase/checkIfUserExists()', error);
  }
};
