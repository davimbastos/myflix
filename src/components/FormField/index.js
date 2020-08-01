import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Label, Input } from './styles';

function FormField({
  label, type, name, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTypeTextarea = type === 'textarea';
  const tag = isTypeTextarea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  const hasSuggestion = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={tag}
          id={fieldId}
          type={type}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
          autoComplete={hasSuggestion ? 'off' : 'on'}
          list={hasSuggestion ? `suggestionFor_${fieldId}` : 'on'}
        />
        <Label.Text>
          {label}
        </Label.Text>
        {
          hasSuggestion && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {
            suggestions.map((suggestion) => (
              <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                {suggestion}
              </option>
            ))
          }
          </datalist>
          )
        }

      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
