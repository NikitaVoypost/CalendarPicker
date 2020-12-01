import React from 'react';
import {
  View,
  Text,
  Platform,
} from 'react-native';
import Controls from './Controls';

export default function YearsHeader(props) {
  const {
    title,
    year,
    maxDate,
    minDate,
    restrictNavigation,
    styles,
    textStyle,
    previousComponent,
    nextComponent,
    previousTitle,
    nextTitle,
    previousTitleStyle,
    nextTitleStyle,
    onYearViewPrevious,
    onYearViewNext,
    headingLevel,
  } = props;

  const disablePrevious = restrictNavigation && minDate && (minDate.year() >= year);
  const disableNext = restrictNavigation && maxDate && (maxDate.year() <= year);

  const accessibilityProps = { accessibilityRole: 'header' };
  if (Platform.OS === 'web') {
    accessibilityProps['aria-level'] = headingLevel;
  }

  return (
    <View style={styles.headerWrapper}>
      <Controls
        disabled={disablePrevious}
        label={previousTitle}
        component={previousComponent}
        onPressControl={onYearViewPrevious}
        styles={styles.previousContainer}
        textStyles={[styles.navButtonText, textStyle, previousTitleStyle]}
      />
      <Text style={[styles.yearsHeaderText, textStyle]} {...accessibilityProps}>
        { title }
      </Text>
      <Controls
        disabled={disableNext}
        label={nextTitle}
        component={nextComponent}
        onPressControl={onYearViewNext}
        styles={styles.nextContainer}
        textStyles={[styles.navButtonText, textStyle, nextTitleStyle]}
      />
    </View>
  );
}
