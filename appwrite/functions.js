import client from "./config";
import { Account, Databases, Query, ID } from "appwrite";
import { ID as DBID } from "./id";

const account = new Account(client);
const databases = new Databases(client);

// login with email and password

export const login = async (email, password) => {
  try {
    const promise = await account.createEmailSession(email, password);
    return promise;
  } catch (error) {
    throw error;
  }
};

export const getSession = async (sessionId) => {
  try {
    const promise = await account.getSession(sessionId);
    return promise;
  } catch (error) {
    throw error;
  }
};

export const endSession = async (sessionId) => {
  try {
    const promise = await account.deleteSession(sessionId);
    return promise;
  } catch (error) {
    throw error;
  }
};

export const fetchUserDetails = async (user_id) => {
  try {
    const promise = await databases.listDocuments(
      DBID.DATABASE,
      DBID.COLLECTIONS.USERS,
      [Query.equal("auth_id", user_id)]
    );
    return promise;
  } catch (error) {
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const promise = await databases.listDocuments(
      DBID.DATABASE,
      DBID.COLLECTIONS.CATEGORIES
    );
    return promise;
  } catch (error) {
    throw error;
  }
};

export const createCategory = async (data) => {
  try {
    const promise = await databases.createDocument(
      DBID.DATABASE,
      DBID.COLLECTIONS.CATEGORIES,
      ID.unique(),
      data
    );
  } catch (error) {
    throw error;
  }
};

export const updateCategory = async (id, data) => {
  try {
    const promise = await databases.updateDocument(
      DBID.DATABASE,
      DBID.COLLECTIONS.CATEGORIES,
      id,
      data
    );
  } catch (error) {
    throw error;
  }
};

export const deleteCategory = async (id) => {
  try {
    const promise = await databases.deleteDocument(
      DBID.DATABASE,
      DBID.COLLECTIONS.CATEGORIES,
      id
    );
  } catch (error) {
    throw error;
  }
};
