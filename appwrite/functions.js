/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Account, Databases, ID, Query } from "appwrite";

import client from "./config";

const account = new Account(client);
const databases = new Databases(client);
import { APPWRITE_IDS } from "./config";

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
      APPWRITE_IDS.DATABASE,
      APPWRITE_IDS.COLLECTIONS.USERS,
      [Query.equal("uid", user_id)]
    );
    return promise;
  } catch (error) {
    throw error;
  }
};

export const readFromCollection = async (collection_id) => {
  try {
    const promise = await databases.listDocuments(
      APPWRITE_IDS.DATABASE,
      collection_id
    );
    return promise;
  } catch (error) {
    throw error;
  }
};

export const readFromCollectionByUid = async (collection_id, uid) => {
  try {
    const promise = await databases.listDocuments(
      APPWRITE_IDS.DATABASE,
      collection_id,
      [Query.equal("uid", uid)]
    );
    return promise;
  } catch (error) {
    throw error;
  }
};

export const addDocumentToCollection = async (collection_id, data) => {
  try {
    const promise = await databases.createDocument(
      APPWRITE_IDS.DATABASE,
      collection_id,
      ID.unique(),
      data
    );
    return promise;
  } catch (error) {
    throw error;
  }
};

export const updateDocumentInCollection = async (collection_id, id, data) => {
  try {
    const promise = await databases.updateDocument(
      APPWRITE_IDS.DATABASE,
      collection_id,
      id,
      data
    );
    return promise;
  } catch (error) {
    throw error;
  }
};

export const deleteDocumentFromCollection = async (collection_id, id) => {
  try {
    const promise = await databases.deleteDocument(
      APPWRITE_IDS.DATABASE,
      collection_id,
      id
    );
    return promise;
  } catch (error) {
    throw error;
  }
};
