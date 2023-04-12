import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Switch,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Section = ({ header, items }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionHeader}>{header}</Text>
      {items.map(({ label, icon, type, value, color }, index) => {
        return (
          <TouchableOpacity
            key={label}
            onPress={() => {
              // handle onPress
            }}
          >
            <View style={styles.row}>
              <View
                style={[styles.rowIcon, { backgroundColor: color }]}
              >
                <FeatherIcon color="#fff" name={icon} size={18} />
              </View>

              <Text style={styles.rowLabel}>{label}</Text>

              <View style={styles.rowSpacer} />

              {type === 'boolean' && <Switch value={value} />}

              {type === 'link' && (
                <FeatherIcon
                  color="#0c0c0c"
                  name="chevron-right"
                  size={22}
                />
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 24,
  },
  sectionHeader: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#9e9e9e',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    marginLeft: 16,
    flex: 1,
    fontSize: 16,
    fontWeight: '400',
    color: '#2c2c2c',
  },
  rowSpacer: {
    width: 16,
  },
});

export default Section;
