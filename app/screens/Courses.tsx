import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import {colors} from '../styles/common-styles';
import * as courses from '../data/courses.json';
import CourseList from '../components/courses/CourseList';
import {Category} from '../types/courses';
import FilterModal from '../components/courses/FilterModal';

const Courses: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Category | null>(null);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState(courses.courseCards);

  const openModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
    setSelectedItem(null);
  };

  useEffect(() => {
    let categoriesArray: any = [];
    courses.courseCards.map((item, i) => {
      if (
        !categoriesArray.find(
          a => a.categoryId === item.courseMainCategory.categoryId,
        )
      ) {
        categoriesArray.push(item.courseMainCategory);
      }
    });
    setCategories(categoriesArray);
  }, []);

  useEffect(() => {
    if (selectedItem) {
      let newData = courses.courseCards.filter(
        item => item.courseMainCategory.categoryId === selectedItem.categoryId,
      );
      setData(newData);
    } else {
      setData(courses.courseCards);
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
