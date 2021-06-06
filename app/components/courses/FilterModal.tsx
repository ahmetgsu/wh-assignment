import React, {FC} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ModalHeader from '../ModalHeader';
import {colors} from '../../styles/common-styles';
import CustomButton from '../Button';
import Modal from 'react-native-modal';
import {Category} from '../../types/courses';

interface Props {
  isVisible: boolean;
  closeModal: () => void;
  categories: Array<Category>;
  handleSelect: (p1: Category) => void;
  selectedItem: Category | null;
  setIsVisible: (p1: boolean) => void;
}

const FilterModal: FC<Props> = ({
  isVisible,
  closeModal,
  categories,
  handleSelect,
  selectedItem,
  setIsVisible,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      coverScreen
      hasBackdrop={false}
      style={styles.modal}
      animationIn="slideInRight"
      animationOut="bounceOutRight">
      <ModalHeader action={closeModal} />
      <ScrollView style={{flex: 1}}>
        <View style={{marginTop: 5}}>
          <View style={{marginTop: 20}}>
            {categories.map((item: Category, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => handleSelect(item)}
                style={styles.touchable}>
                <CheckBox
                  disabled={false}
                  tintColor={colors.main}
                  onCheckColor={colors.main}
                  hideBox={true}
                  value={selectedItem?.categoryName === item.categoryName}
                />
                <Text style={{fontSize: 16}}>{item.categoryName}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <CustomButton text="Apply" callback={() => setIsVisible(false)} />
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.white,
    margin: 0,
  },
  footer: {
    marginHorizontal: 15,
    position: 'absolute',
    bottom: 35,
    left: 0,
    right: 0,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 15,
  },
});
