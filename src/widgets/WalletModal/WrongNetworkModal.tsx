import React from "react";
import Text from "../../components/Text/Text";
import { Modal } from "../Modal";
import Button from "../../components/Button/Button";
import { connectorLocalStorageKey } from "./config";

interface Props {
    onDismiss?: () => void;
    logout: () => void;
}

const WrongNetworkModal: React.FC<Props> = ({ logout, onDismiss = () => null }) => (
    <Modal title="Network Issue" onDismiss={onDismiss}>
        <Text
            fontSize="20px"
            bold
            style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
        >
            Currently, we only support Polygon (MATIC). Please switch to this network.
        </Text>

        <Button
            size="sm"
            variant="secondary"
            onClick={() => {
                logout();
                window.localStorage.removeItem(connectorLocalStorageKey);
                onDismiss();
                window.location.reload();
            }}
        >
            Logout
        </Button>

    </Modal>
);

export default WrongNetworkModal;
