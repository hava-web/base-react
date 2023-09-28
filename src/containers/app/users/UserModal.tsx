import Button from 'components/button/Button';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import React from 'react';
import { Form, Header, Label, Modal, Segment } from 'semantic-ui-react';
import { UserInput } from 'models/users.model';
import { updateUserAction } from 'store/features/users/usersSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store';
import Input from 'components/input/Input';

const UserModal = ({ status, user, handleCancel }: any) => {
  const userFind = user;
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit: SubmitHandler<any> = (data: UserInput) => {
    dispatch(updateUserAction(data));
    handleCancel(false);
    reset();
    // console.log(data);
  };
  const handleCancelClick = () => {
    handleCancel(false);
    reset();
  };

  return (
    <Modal open={status}>
      <Header icon="archive" content="Update user modal" />
      <Modal.Content>
        <div className="">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Segment className="form-edit">
              <Controller
                name="name"
                control={control}
                rules={{ required: 'Name is required' }}
                defaultValue={userFind === undefined ? '' : userFind.name}
                render={({ field }) => (
                  <>
                    <div className="item-edit">
                      <div className="item">
                        <Label className="edit-label">Name</Label>
                        <Input
                          className="input-edit"
                          {...field}
                          value={field.value || ''}
                          ref={null}
                        />
                      </div>
                      {errors.name && (
                        <span className="error-message">
                          {errors.name.message as string}
                        </span>
                      )}
                    </div>
                  </>
                )}
              />
              <Controller
                name="job"
                control={control}
                rules={{ required: 'Job is required' }}
                defaultValue={userFind === undefined ? '' : userFind.job}
                render={({ field }) => (
                  <>
                    <div className="item-edit">
                      <div className="item">
                        <Label className="edit-label">Job</Label>
                        <Input
                          className="input-edit"
                          {...field}
                          value={field.value || ''}
                          ref={null}
                        />
                      </div>
                      {errors.job && (
                        <span className="error-message">
                          {errors.job.message as string}
                        </span>
                      )}
                    </div>
                  </>
                )}
              />
              <Controller
                name="id"
                control={control}
                defaultValue={userFind === undefined ? '' : userFind.id}
                render={({ field }) => (
                  <Input className="input-hidden" type={'hidden'} />
                )}
              />
            </Segment>
            <div className="button-edit">
              <Button type="submit" color="linkedin">
                Edit
              </Button>
              <Button color="youtube" onClick={handleCancelClick}>
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default UserModal;
