import { StyleSheet } from 'react-native';
import { typography, colors, spacing, borderRadius } from '../../../utils/theme';
import { fonts } from '../../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: spacing.md,
  },
  headerTitle: {
    ...typography.h2,
    fontFamily: fonts.bold,
    color: colors.text,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.md,
    marginHorizontal: spacing.md,
    marginBottom: spacing.md,
    padding: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  cardTitle: {
    ...typography.subtitle1,
    fontFamily: fonts.medium,
    color: colors.text,
  },
  viewDetailsText: {
    ...typography.button,
    fontFamily: fonts.medium,
    color: colors.primary,
    fontSize: 14,
  },
  rentContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: spacing.md,
    borderRadius: borderRadius.md,
  },
  dueText: {
    ...typography.body2,
    fontFamily: fonts.regular,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  amountText: {
    ...typography.h2,
    fontFamily: fonts.bold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  periodText: {
    ...typography.body2,
    fontFamily: fonts.regular,
    color: colors.textSecondary,
  },
  payNowButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.sm,
  },
  payNowText: {
    ...typography.button,
    fontFamily: fonts.medium,
    color: 'white',
    fontSize: 14,
  },
  
  // Bill item styles
  billItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F7FA',
  },
  billIconContainer: {
    marginRight: spacing.sm,
  },
  billIcon: {
    width: 36,
    height: 36,
    borderRadius: borderRadius.round,
    justifyContent: 'center',
    alignItems: 'center',
  },
  billDetails: {
    flex: 1,
  },
  billTitle: {
    ...typography.subtitle2,
    fontFamily: fonts.medium,
    color: colors.text,
  },
  billDueText: {
    ...typography.caption,
    fontFamily: fonts.light,
    color: colors.textSecondary,
  },
  billAmountContainer: {
    alignItems: 'flex-end',
  },
  billAmount: {
    ...typography.subtitle2,
    fontFamily: fonts.medium,
    color: colors.text,
    marginBottom: 2,
  },
  payText: {
    ...typography.button,
    fontFamily: fonts.medium,
    color: colors.primary,
    fontSize: 14,
  },
  
  // Maintenance request styles
  maintenanceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F7FA',
  },
  maintenanceIconContainer: {
    marginRight: spacing.sm,
  },
  maintenanceIcon: {
    width: 36,
    height: 36,
    borderRadius: borderRadius.round,
    backgroundColor: '#FFF9C4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  maintenanceDetails: {
    flex: 1,
  },
  maintenanceTitle: {
    ...typography.subtitle2,
    fontFamily: fonts.medium,
    color: colors.text,
    marginBottom: 2,
  },
  statusContainer: {
    backgroundColor: '#FFF9C4',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  statusText: {
    ...typography.caption,
    fontFamily: fonts.light,
    color: '#FF9800',
    fontSize: 10,
  },
  chevron: {
    fontSize: 24,
    color: colors.textSecondary,
  },
  raiseRequestButton: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.sm,
    paddingVertical: spacing.sm,
    marginTop: spacing.md,
    alignItems: 'center',
  },
  raiseRequestText: {
    ...typography.button,
    fontFamily: fonts.medium,
    color: colors.text,
    fontSize: 14,
  },
});
