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
  locationPickerTextSelected: {
    ...typography.body1,
    fontFamily: fonts.medium,
    color: colors.text,
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
    color: colors.primary,
    textAlign: 'center',
  },
  photoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.md,
  },
  photoPreview: {
    width: 80,
    height: 80,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
    borderRadius: borderRadius.sm,
    position: 'relative',
  },
  photoImage: {
    width: '100%',
    height: '100%',
    borderRadius: borderRadius.sm,
  },
  removePhotoButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
    margin: spacing.md,
    display: 'flex',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  submitButtonDisabled: {
    backgroundColor: '#BDBDBD',
  },
  submitButtonText: {
    ...typography.button,
    fontFamily: fonts.medium,
    color: 'white',
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },
  
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.card,
    borderTopLeftRadius: borderRadius.md,
    borderTopRightRadius: borderRadius.md,
    padding: spacing.md,
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
    paddingBottom: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  modalTitle: {
    ...typography.h4,
    fontFamily: fonts.semiBold,
    color: colors.text,
  },
  locationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  locationItemText: {
    ...typography.body1,
    fontFamily: fonts.regular,
    color: colors.text,
  },
});
