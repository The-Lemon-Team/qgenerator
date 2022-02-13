import React, { useCallback } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { Role } from '../../enums';

interface RoleFieldProps {
  role: Role;
  id: string;

  onRoleChange(role: Role): void;
}

export const RoleField: React.FC<RoleFieldProps> = ({
  role,
  id,
  onRoleChange,
}) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
      event.target.value && onRoleChange(event.target.value as Role);
    },
    [onRoleChange],
  );

  return (
    <FormControl fullWidth>
      <InputLabel id="role-field">Role</InputLabel>
      <Select
        labelId="role-field"
        id={id}
        value={role}
        label="Role"
        onChange={handleChange}
        color="primary"
      >
        {[Role.SuperAdmin, Role.Admin, Role.Moderator, Role.User].map(
          (role) => {
            return (
              <MenuItem value={role} key={role}>
                {role}
              </MenuItem>
            );
          },
        )}
      </Select>
    </FormControl>
  );
};
