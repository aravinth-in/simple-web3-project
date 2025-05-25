# Web3 Transaction Tracker

A decentralized application (dApp) for recording and tracking Ethereum transactions on the Sepolia testnet using MetaMask. Provides a transparent, on-chain ledger of fund transfers with metadata.

---

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Smart Contract](#smart-contract)
- [Frontend](#frontend)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Notes](#notes)

---

## Description

This dApp allows users to:
- Record ETH transactions with custom messages, stored on-chain.
- View a transparent history of all transactions.
- Interact with the Ethereum Sepolia testnet via MetaMask.

---

## Technologies Used

| Technology      | Purpose                                 |
|-----------------|-----------------------------------------|
| **Solidity**    | Smart contract language                 |
| **Hardhat**     | Smart contract development environment  |
| **Ethers.js**   | Blockchain interaction library          |
| **React**       | Frontend UI framework                   |
| **Tailwind CSS**| UI styling framework                    |
| **MetaMask**    | Ethereum wallet browser extension       |
| **Sepolia**     | Ethereum test network                   |

---

## Smart Contract

- **Name:** `Transactions`
- **Location:** `contracts/Transactions.sol`
- **Purpose:** Stores transaction data on-chain

**Key Functions:**
- `addToBlockchain(address payable receiver, uint amount, string memory message)`: Records a new transaction.
- `getAllTransactions()`: Retrieves all transactions.
- `getTransactionCount()`: Returns the total transaction count.

**Events:**
- `Transfer(address from, address receiver, uint amount, string message, uint256 timestamp)`: Emitted on new transaction.

---

## Frontend

- **Framework:** React
- **Styling:** Tailwind CSS

**Key Components:**
- `Transactions.jsx`: Displays transaction history.
- `TransactionContext.jsx`: Handles MetaMask connection and contract interaction.

---

## Getting Started

### 1. Install Dependencies

```bash
cd smart_contract
npm install
cd ../client
npm install
```

### 2. Configure Environment

- **Alchemy URL:** Create an Alchemy account, set up an app, and copy the Sepolia HTTP URL.
- **Private Key:** Export your MetaMask account's private key (keep it secure!).

Create `hardhat.config.js` in `smart_contract` and add your Alchemy URL and private key.

### 3. Deploy the Smart Contract

```bash
cd smart_contract
npx hardhat run scripts/deploy.js --network sepolia
```

### 4. Update Frontend with Contract Details

- Copy the deployed contract address from the console.
- Update `contractAddress` in `client/utils/constants.js`.
- Copy the ABI from `Transactions.json` and save it as `transactions.json` in `client/utils`.
- Import the ABI in `TransactionContext.jsx`.

### 5. Run the Frontend

```bash
cd client
npm run dev
```

### 6. Connect MetaMask

- Install the MetaMask extension.
- Switch to the Sepolia test network.
- Import your account using the deployment private key.

---

## Usage

1. Connect MetaMask to the dApp.
2. Send ETH transactions with messages.
3. View the transaction history in the interface.

---

## Notes

- For educational purposes only.
- Use caution when deploying and interacting with smart contracts.
*   This code is referenced and inspired by the tutorial on YouTube: [https://www.youtube.com/watch?v=Wn_Kb3MR_cU](https://www.youtube.com/watch?v=Wn_Kb3MR_cU)

