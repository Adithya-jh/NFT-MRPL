import React, { useState, useEffect } from 'react';
import web3Modal from 'web3modal';

import { ethers } from 'ethers';
import axios from 'axios';

import { MarketAddress, MarketAddressAbi } from './constants';
import { create as ipfsHttpClient } from 'ipfs-http-client';
const ipfsClient = require('ipfs-http-client');

const projectId = '2PgTO7vsyM59cpG2acNOeedn5ol';
const projectSecret = '5941b98f66cd58b92f0809c0d4131348';
const auth =
  'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = ipfsClient.create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
});

export const NFTContext = React.createContext();

export const NFTProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const nftCurrency = 'ETH';

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Make sure you have metamask!');
      return;
    } else {
      console.log('We have the ethereum object', ethereum);
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    } else {
      console.log('No accounts found');
    }

    console.log({ accounts });
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) return alert('ADD ACCOUNT BRUH!');

    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    setCurrentAccount(accounts[0]);

    // window.location.reload();
  };

  const uploadToIPFS = async (file) => {
    try {
      const added = await client.add({ content: file });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      // setFileUrl(url);
      return url;
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  };

  return (
    <NFTContext.Provider
      value={{ nftCurrency, connectWallet, currentAccount, uploadToIPFS }}
    >
      {children}
    </NFTContext.Provider>
  );
};
