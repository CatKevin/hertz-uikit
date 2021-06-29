import React from "react";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  error?: Error;
}

const UserBlock: React.FC<Props> = ({ account, login, logout, error }) => {
  const { onPresentConnectModal, onPresentAccountModal, onPresentWrongNetworkModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;

  let comp;
  if (error) {
    comp = <Button
      size="sm"
      variant="danger"
      onClick={() => {
        onPresentWrongNetworkModal();
      }}
    >
      Wrong Network
    </Button>
  } else if (account) {
    comp = <Button
      size="sm"
      variant="tertiary"
      onClick={() => {
        onPresentAccountModal();
      }}
    >
      {accountEllipsis}
    </Button>
  } else {
    comp = <Button
      size="sm"
      onClick={() => {
        onPresentConnectModal();
      }}
    >
      Connect
    </Button>
  }
  return (
    <div>{comp}</div>
  );
};

export default React.memo(
  UserBlock,
  (prevProps, nextProps) =>
    prevProps.account === nextProps.account &&
    prevProps.login === nextProps.login &&
    prevProps.logout === nextProps.logout &&
    prevProps.error === nextProps.error
);
