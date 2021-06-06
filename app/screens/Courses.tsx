import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import {colors} from '../styles/common-styles';
import * as courses from '../data/courses.json';
import CourseList from '../components/courses/CourseList';
import {Category, CourseListProps} from '../types/courses';
import FilterModal from '../components/courses/FilterModal';
import {getUniqueValues} from '../helpers/unique-values';

const initialData = courses.courseCards as CourseListProps[];

const Courses: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Category | null>(null);
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [data, setData] = useState(initialData);
  console.log('data', data);
  console.log('courses', courses);

  const openModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
    setSelectedItem(null);
  };

  useEffect(() => {
    const uniqueCategories = getUniqueValues(initialData);
    setCategories(uniqueCategories);
  }, []);

  useEffect(() => {
    if (selectedItem) {
      let newData: CourseListProps[] = initialData.filter(
        item => item.courseMainCategory.categoryId === selectedItem.categoryId,
      );
      setData(newData);
    } else {
      setData(initialData);
    }
  }, [selectedItem]);

  const handleSelect = (item: Category) => {
    if (selectedItem?.categoryId === item.categoryId) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title="All Courses"
        color={colors.main}
        action={openModal}
        actionText="Filter"
      />
      <View style={styles.content}>
        <CourseList data={data} />
      </View>
      <FilterModal
        isVisible={isVisible}
        closeModal={closeModal}
        categories={categories}
        handleSelect={handleSelect}
        selectedItem={selectedItem}
        setIsVisible={setIsVisible}
      />
    </View>
  );
};

export default Courses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
  },
  footer: {
    marginHorizontal: 15,
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
  },
});
