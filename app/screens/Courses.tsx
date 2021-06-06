import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import Header from '../components/Header';
import {colors, commonStyles} from '../styles/common-styles';
import * as courses from '../data/courses.json';
import CourseList from '../components/courses/CourseList';
import {Category, CourseListProps} from '../types/courses';
import FilterModal from '../components/courses/FilterModal';
import {getUniqueValues} from '../helpers/unique-values';
import {filterCourses} from '../helpers/filter-courses';

const initialData = courses.courseCards as CourseListProps[];

const Courses: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Category | null>(null);
  console.log('initialData', initialData);
  console.log('selectedItem', selectedItem);
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [data, setData] = useState(initialData);

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
    selectedItem ? showFilteredResult() : showAllResults();
  }, [selectedItem]);

  const showFilteredResult = (): void => {
    let newData: CourseListProps[] = filterCourses(initialData, selectedItem);
    setData(newData);
  };

  const showAllResults = () => setData(initialData);

  const handleSelect = (item: Category) => {
    const isFilterSelected = selectedItem?.categoryId === item.categoryId;
    isFilterSelected ? setSelectedItem(null) : setSelectedItem(item);
  };

  return (
    <View style={commonStyles.container}>
      <Header
        title="All Courses"
        color={colors.main}
        action={openModal}
        actionText="Filter"
      />
      <View style={commonStyles.content}>
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
