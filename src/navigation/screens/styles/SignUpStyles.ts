import { StyleSheet } from 'react-native';
import { spacing, typography, borderRadius } from '../../../utils/theme';

export const styles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.lg,
    marginTop: spacing.md,
  },
  backButton: {
    padding: spacing.xs,
    borderRadius: borderRadius.sm,
  },
  headerTitle: {
    ...typography.h2,
    color: colors.text,
    fontWeight: '600',
  },
  placeholder: {
    width: 32, // Same width as back button to center the title
  },
  form: {
    flex: 1,
    paddingTop: spacing.md,
  },
  inputGroup: {
    marginBottom: spacing.lg,
  },
  inputLabel: {
    ...typography.subtitle2,
    color: colors.text,
    fontWeight: '500',
    marginBottom: spacing.sm,
    fontSize: 16,
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    ...typography.body1,
    backgroundColor: colors.card,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md + spacing.xs, // 20px vertical padding
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border,
    fontSize: 16,
    minHeight: 56, // Consistent height for inputs
  },
  passwordInput: {
    paddingRight: spacing.xl + spacing.lg, // Make room for the eye icon
  },
  passwordToggle: {
    position: 'absolute',
    right: spacing.md,
    top: '50%',
    transform: [{ translateY: -10 }], // Half of icon size to center it
    padding: spacing.xs,
  },
  signUpButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md + spacing.xs, // 20px vertical padding
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.lg,
    marginBottom: spacing.xl,
    minHeight: 56, // Same height as inputs for consistency
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },
  signUpButtonDisabled: {
    backgroundColor: colors.textSecondary,
    shadowOpacity: 0,
    elevation: 0,
  },
  signUpButtonText: {
    ...typography.button,
    color: colors.whiteText,
    fontWeight: '600',
    fontSize: 16,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: spacing.xl,
    marginTop: 'auto', // Push to bottom
  },
  loginText: {
    ...typography.body1,
    color: colors.textSecondary,
  },
  loginLink: {
    ...typography.body1,
    color: colors.primary,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
