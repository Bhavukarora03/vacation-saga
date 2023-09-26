import Label from "components/Label/Label";
import React from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Input from "shared/Input/Input";
import Cookies from 'universal-cookie';
import CommonLayout from "./CommonLayout";

const AccountPass = () => {
  const cookies = new Cookies();
  return (
    <div>
      <CommonLayout>
        <form method="POST">
        <div className="space-y-6 sm:space-y-8">
          {/* HEADING */}
          <h2 className="text-3xl font-semibold">Update your password</h2>
          <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className=" max-w-xl space-y-6">
            <div>
              <Label>Current password</Label>
              <Input type="password" name="c_password" className="mt-1.5" />
              <Input type="hidden" name="email" value={cookies.get('travellerid')} />
            <div>
              <Label>New password</Label>
              <Input type="password" name="n_password" className="mt-1.5" />
            </div>
            <div>
              <Label>Confirm password</Label>
              <Input type="password" name="con_password" className="mt-1.5" />
            </div>
            <div className="pt-2">
              <ButtonPrimary type='submit'>Update password</ButtonPrimary>
            </div>
          </div>
        </div>
        </div>
        </form>
      </CommonLayout>
    </div>
  );
};

export default AccountPass;
