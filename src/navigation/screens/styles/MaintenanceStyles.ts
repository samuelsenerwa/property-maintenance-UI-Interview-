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
    padding: spacing.md,
  },
  sectionTitle: {
    ...typography.subtitle1,
    fontFamily: fonts.bold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  inputLabel: {
    ...typography.body2,
    fontFamily: fonts.regular,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.sm,
    padding: spacing.sm,
    ...typography.body1,
    fontFamily: fonts.regular,
    color: colors.text,
    marginBottom: spacing.md,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  locationPicker: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.sm,
    padding: spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  locationPickerText: {
    ...typography.body1,
    fontFamily: fonts.regular,
    color: colors.textSecondary,
  },
  uploadButton: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.border,
    borderRadius: borderRadius.sm,
    padding: spacing.md,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  uploadButtonText: {
    ...typography.button,
    fontFamily: fonts.medium,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  requestItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.sm,
    marginBottom: spacing.md,
  },
  requestInfo: {
    flex: 1,
  },
  requestId: {
    ...typography.subtitle2,
    fontFamily: fonts.medium,
    color: colors.text,
    marginBottom: 2,
  },
  requestDescription: {
    ...typography.body2,
    fontFamily: fonts.regular,
    color: colors.textSecondary,
  },
  statusBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.xs,
    alignSelf: 'flex-start',
  },
  statusInProgress: {
    backgroundColor: '#FFF9C4',
  },
  statusCompleted: {
    backgroundColor: '#E8F5E9',
  },
  statusSubmitted: {
    backgroundColor: '#E3F2FD',
  },
  statusText: {
    ...typography.caption,
    fontFamily: fonts.medium,
    fontSize: 10,
  },
  statusTextInProgress: {
    color: '#FF9800',
  },
  statusTextCompleted: {
    color: '#4CAF50',
  },
  statusTextSubmitted: {
    color: '#2196F3',
  },
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.sm,
    padding: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.md,
    display: 'flex',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  submitButtonText: {
    ...typography.button,
    fontFamily: fonts.medium,
    color: 'white',
  },
});
