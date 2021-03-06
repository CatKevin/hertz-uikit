import { Login } from "./types";
interface ReturnType {
    onPresentConnectModal: () => void;
    onPresentAccountModal: () => void;
    onPresentWrongNetworkModal: () => void;
}
declare const useWalletModal: (login: Login, logout: () => void, account?: string | undefined) => ReturnType;
export default useWalletModal;
