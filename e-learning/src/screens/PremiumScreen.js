import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { requestPurchase, getProducts, finishTransaction } from 'react-native-iap';

const PremiumScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    getProducts(['premium_subscription'])
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleBuy = async () => {
    try {
      setLoading(true);
      const purchase = await requestPurchase('premium_subscription');
      console.log(purchase);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Premium Subscription</Text>
      <Text style={styles.description}>Unlock premium features for $4.99 per month</Text>
      <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
        <Text style={styles.buyButtonText}>{loading ? 'Processing...' : 'Buy Now'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  buyButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default PremiumScreen;
