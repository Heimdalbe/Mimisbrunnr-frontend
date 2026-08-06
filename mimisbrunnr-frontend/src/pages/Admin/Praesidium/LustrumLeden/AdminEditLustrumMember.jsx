import useSWR from 'swr';
import { getAll } from '../../../../api';
import AsyncData from '../../../../components/Common/AsyncData/AsyncData';
import { Form, useParams } from 'react-router';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import MemberForm from '../../../../components/Admin/Praesidium/MemberTable/MemberForm';

const AdminEditLustrumMember = () => {
  const { id } = useParams();
  const { data: member = {}, error, isLoading } = useSWR(`praesidium/lustrum/members/${id}`, getAll);

  return (
    <div className="container">
      <AsyncData loading={isLoading} error={error}>
        <Breadcrumbs
          children={[
            { link: 'admin' },
            { link: 'lustrumleden' },
            {
              link: `${member.member?.firstName} ${member.member?.lastName}(${member.year}-${member.year + 1})`,
              isLast: true,
            },
          ]}
        />
        <MemberForm endpoint={'praesidium/lustrum/members'} id={id} member={member} />
      </AsyncData>
    </div>
  );
};

export default AdminEditLustrumMember;
