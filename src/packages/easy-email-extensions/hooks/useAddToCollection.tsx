import { AddToCollection } from 'packages/easy-email-extensions/components/AddToCollection';
import { useMemo, useState } from 'react';

export function useAddToCollection() {
  const [modalVisible, setModalVisible] = useState(false);
  const modal = useMemo(
    () => (
      <AddToCollection visible={modalVisible} setVisible={setModalVisible} />
    ),
    [modalVisible]
  );

  return {
    modal,
    modalVisible,
    setModalVisible,
  };
}
